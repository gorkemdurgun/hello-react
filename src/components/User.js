import PropTypes from "prop-types";

/* 
props kullanmak yerine propertyleri tek tek tanımlama:
function User({name, surname, isLogged})
*/

function User(props) {

    if (!props.isLogged) {
        return <div> Giriş Yapmadınız ... </div>;
    }

    return (
        <div>

            <h1> {props.name} {props.surname} - {props.age} </h1>

            <h2> {props.address.city} {props.address.zipcode} </h2>

            {
                props.favSingers && // varsa göster demek istedik
                props.favSingers.map((singer, index) =>
                    <div key={index}>
                        <i>{singer.name} ({singer.age}) </i>
                    </div>
                )
            }

        </div>
    );

}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLogged: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    favSingers: PropTypes.array,
    address: PropTypes.shape({
        city: PropTypes.string,
        zipcode: PropTypes.number,
    }),
};

User.defaultProps = {
    isLogged: false,
    name: 'Name',
    age: 0,
};

export default User;