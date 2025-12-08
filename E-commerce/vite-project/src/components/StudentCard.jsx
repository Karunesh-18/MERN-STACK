const StudentCard = ({fname, lname, age}) => {
    // const {} = props;
    return (
        <div className="shadow-lg p-4 rounded-md">
        First Name: {fname} <br />
        Last Name: {lname} <br />
        Full Name: {fname} {lname} <br />
        Age: {age}
        </div>
    )
}


export default StudentCard;