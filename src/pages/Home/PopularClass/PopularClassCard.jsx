
const PopularClassCard = ({ popular }) => {
    const { image, name } = popular;
    return (
        <div>
            <p><img src={image} alt="" /></p>
            <p>{name}</p>
        </div>
    );
};

export default PopularClassCard;