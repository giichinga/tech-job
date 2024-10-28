import "../CSS/Card.css";
import PropTypes from "prop-types";
function TalentCard(props) {
    return (
        <div className="talentCard">
            <div className="cardHeader">
                <h2>{props.name}</h2>
                <p>{props.talent}</p>
            </div>
            <div className="cardStats">
                <p>Skills: React, Node, Express, MongoDB, Python, Django</p>
                <p>Location: Nairobi, Kenya</p>
            </div>
            <div className="cardBody">
                <p>
                    {props.bio}
                </p>
            </div>
            <div className="cardFooter">
                <div className="rating">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M10.5766 8.70419C11.2099 7.56806 11.5266 7 12 7C12.4734 7 12.7901 7.56806 13.4234 8.70419L13.5873 8.99812C13.7672 9.32097 13.8572 9.48239 13.9975 9.5889C14.1378 9.69541 14.3126 9.73495 14.6621 9.81402L14.9802 9.88601C16.2101 10.1643 16.825 10.3034 16.9713 10.7739C17.1176 11.2443 16.6984 11.7345 15.86 12.715L15.643 12.9686C15.4048 13.2472 15.2857 13.3865 15.2321 13.5589C15.1785 13.7312 15.1965 13.9171 15.2325 14.2888L15.2653 14.6272C15.3921 15.9353 15.4554 16.5894 15.0724 16.8801C14.6894 17.1709 14.1137 16.9058 12.9622 16.3756L12.6643 16.2384C12.337 16.0878 12.1734 16.0124 12 16.0124C11.8266 16.0124 11.663 16.0878 11.3357 16.2384L11.0378 16.3756C9.88634 16.9058 9.31059 17.1709 8.92757 16.8801C8.54456 16.5894 8.60794 15.9353 8.7347 14.6272L8.76749 14.2888C8.80351 13.9171 8.82152 13.7312 8.76793 13.5589C8.71434 13.3865 8.59521 13.2472 8.35696 12.9686L8.14005 12.715C7.30162 11.7345 6.88241 11.2443 7.02871 10.7739C7.17501 10.3034 7.78993 10.1643 9.01977 9.88601L9.33794 9.81402C9.68743 9.73495 9.86217 9.69541 10.0025 9.5889C10.1428 9.48239 10.2328 9.32097 10.4127 8.99812L10.5766 8.70419Z" stroke="#1C274C" ></path> <path opacity="0.5" d="M12 2V4" stroke="#1C274C" ></path> <path opacity="0.5" d="M12 20V22" stroke="#1C274C" ></path> <path opacity="0.5" d="M2 12L4 12" stroke="#1C274C" ></path> <path opacity="0.5" d="M20 12L22 12" stroke="#1C274C" ></path> <path d="M6 18L6.34305 17.657" stroke="#1C274C" ></path> <path d="M17.6567 6.34326L18 6" stroke="#1C274C" ></path> <path d="M18 18L17.657 17.657" stroke="#1C274C"></path> <path d="M6.34326 6.34326L6 6" stroke="#1C274C" ></path> </g></svg>                
                    <p>{props.rating}</p>
                </div>
                <button className="hireBtn" >Hire</button>
            </div>
        </div>
    );

}
TalentCard.propTypes = {
    name: PropTypes.string.isRequired,
    talent: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

TalentCard.defaultProps = {
    name: "Tech Person",
    talent: "Tech",
    bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 0
}

export default TalentCard;