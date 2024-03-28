'use client'

const Courses = (props) => {
    return (
        <li className="course">
            <a style={{ color: "#333" }}>{props.courses.regionname}</a>
            <div className="store-name">
                <a>{props.courses.store1}</a>
            </div>
            <div className="store-address">
                <a>{props.courses.store1address}</a>
            </div>
            <div style={{ marginBottom: "15px" }}></div>
            <div className="store-name">
                <a>{props.courses.store2}</a>
            </div>
            <div className="store-address">
                <a>{props.courses.store2address}</a>
            </div>
            <div style={{ marginBottom: "15px" }}></div>
            <div className="store-name">
                <a>{props.courses.store3}</a>
            </div>
            <div className="store-address">
                <a>{props.courses.store3address}</a>
            </div>
            <div style={{ marginBottom: "15px" }}></div>
        </li>
    )
}

export default Courses;