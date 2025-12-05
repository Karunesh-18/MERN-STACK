let users = []
let currentIndex = 0

const detailsEl = () => document.getElementById('details')
const counterEl = () => document.getElementById('userCounter')

async function loadUsers() {
    const d = detailsEl()
    if (d) d.innerHTML = '<div class="text-center">Loading...</div>'

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        users = await res.json()
        if (!users || users.length === 0) {
            if (d) d.innerHTML = '<div class="text-red-500">No users found</div>'
            return
        }
        currentIndex = 0
        fetchData(currentIndex)
    } catch (err) {
        console.error('Error loading users:', err)
        if (d) d.innerHTML = '<div class="text-red-500">Error loading users</div>'
    }
}

function fetchData(i) {
    const d = detailsEl()
    const c = counterEl()
    if (!users || users.length === 0) {
        if (d) d.innerHTML = '<div class="text-red-500">No users to show</div>'
        if (c) c.textContent = ''
        return
    }

    const u = users[i]
    if (!u) return

    if (d) d.innerHTML = `
        <div class="mb-2"><strong>Name:</strong> ${u.name}</div>
        <div class="mb-2"><strong>Email:</strong> ${u.email}</div>
        <div class="mb-2"><strong>Phone:</strong> ${u.phone}</div>
        <div class="mb-2"><strong>Website:</strong> <a href="http://${u.website}" target="_blank" rel="noopener">${u.website}</a></div>
        <div class="mb-2"><strong>Company:</strong> ${u.company?.name ?? ''}</div>
        <div class="mb-2"><strong>Address:</strong> ${u.address?.street ?? ''}, ${u.address?.suite ?? ''} ${u.address?.city ?? ''}</div>
    `

    if (c) c.textContent = `User ${i + 1} of ${users.length}`
}

function showNext() {
    if (!users || users.length === 0) return
    currentIndex = (currentIndex + 1) % users.length
    fetchData(currentIndex)
}

function showPrev() {
    if (!users || users.length === 0) return
    currentIndex = (currentIndex - 1 + users.length) % users.length
    fetchData(currentIndex)
}

document.addEventListener('DOMContentLoaded', () => {
    const prev = document.getElementById('prevBtn')
    const next = document.getElementById('nextBtn')
    if (prev) prev.addEventListener('click', showPrev)
    if (next) next.addEventListener('click', showNext)
        
    loadUsers()
})
