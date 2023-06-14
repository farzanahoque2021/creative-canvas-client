import img from '../../../assets/images/extra.jpg'

const ExtraSection = () => {
    return (
        <div className='my-8'>
            <h2 className="text-3xl font-bold text-center my-6">Why Drawing this Summer?</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto gap-8 w-3/4'>
                <div>
                    <img className='rounded-lg' src={img} alt="Artist" />
                </div>
                <div className='grid grid-cols-1 gap-3'>
                    <div className="collapse bg-sky-100 border-dashed border-2 border-indigo-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium text-indigo-400">
                            It is a Fun Experience
                        </div>
                        <div className="collapse-content text-indigo-500">
                            <p>Drawing gives you the freedom to experiment with your thoughts and ideas in a way that does not require you to share them with anyone else. Anything you can imagine, you can draw</p>
                        </div>
                    </div>
                    <div className="collapse bg-sky-100 border-dashed border-2 border-indigo-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium text-indigo-400">
                            Discover New Creative Abilities
                        </div>
                        <div className="collapse-content text-indigo-500">
                            <p>While you might think that your creativity has reached its peak, drawing will enable you to flex your creativity muscles in some different dimensions. This is an amazing way of discovering what you are capable of, and you were not even aware of in the first place.</p>
                        </div>
                    </div>
                    <div className="collapse bg-sky-100 border-dashed border-2 border-indigo-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium text-indigo-400">
                            Communicate In A Constructive Manner
                        </div>
                        <div className="collapse-content text-indigo-500">
                            <p>You have probably heard the saying that “a picture is worth a thousand words”, well, that certainly is true when it comes to your drawings. You can have fun explaining something to someone by drawing a picture. In fact, a drawing may enable you to communicate difficult ideas or concepts more effectively</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ExtraSection;