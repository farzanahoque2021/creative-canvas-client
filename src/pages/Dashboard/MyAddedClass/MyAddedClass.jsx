import useAdd from '../../../hooks/useAdd'


const MyAddedClass = () => {
    const [added] = useAdd();


    return (
        <div>
            <h2>{added.length}</h2>
        </div>
    );
};

export default MyAddedClass;