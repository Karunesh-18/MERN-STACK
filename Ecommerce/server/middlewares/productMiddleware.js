const ValidateProductData = (req, res, next) => {
  const { title, price, category, description } = req.body;

  if (!title || !price || !category || !description) {
    return res.status(400).json({
      error: 'Missing required fields: title, price, category, and description are required'
    });
  }

  if (typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({
      error: 'Title must be a non-empty string'
    });
  }

  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({
      error: 'Price must be a positive number'
    });
  }

  if (typeof category !== 'string' || category.trim() === '') {
    return res.status(400).json({
      error: 'Category must be a non-empty string'
    });
  }

  if (typeof description !== 'string' || description.trim() === '') {
    return res.status(400).json({
      error: 'Description must be a non-empty string'
    });
  }

  if (req.body.discount !== undefined) {
    if (typeof req.body.discount !== 'number' || req.body.discount < 0 || req.body.discount > 100) {
      return res.status(400).json({
        error: 'Discount must be a number between 0 and 100'
      });
    }
  }

  if (req.body.image !== undefined) {
    if (!IsValidUrl(req.body.image)) {
      return res.status(400).json({
        error: 'Image must be a valid URL'
      });
    }
  }

  next();
};

const AdminOnly = (req, res, next) => {
  if (!req.UserData) {
    return res.status(401).json({
      error: 'Unauthorized. You must be logged in.'
    });
  }

  if (req.UserData.role !== 'admin') {
    return res.status(403).json({
      error: 'Forbidden. Admin access required.'
    });
  }

  next();
};

const ValidateProductId = (req, res, next) => {
  const productId = parseInt(req.params.id);
  if (isNaN(productId) || productId <= 0) {
    return res.status(400).json({
      error: 'Invalid product ID. ID must be a positive integer.'
    });
  }

  next();
};

const SanitizeProductData = (req, res, next) => {
  if (req.body.title) {
    req.body.title = req.body.title.trim();
  }

  if (req.body.category) {
    req.body.category = req.body.category.trim();
  }

  if (req.body.description) {
    req.body.description = req.body.description.trim();
  }

  if (req.body.price) {
    req.body.price = parseFloat(req.body.price);
  }

  if (req.body.discount !== undefined) {
    req.body.discount = Math.min(Math.max(parseInt(req.body.discount), 0), 100);
  }

  next();
};

function IsValidUrl(urlString) {
  try {
    new URL(urlString);
    return true;
  } catch (_) {
    return false;
  }
}

module.exports = {
  ValidateProductData,
  AdminOnly,
  ValidateProductId,
  SanitizeProductData
};
