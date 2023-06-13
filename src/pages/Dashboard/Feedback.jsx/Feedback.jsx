import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";


const Feedback = () => {
    const location = useLocation();
    const id = location.state;


    const handleFeedback = event => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;

        const updatedFeedback = { feedback }
        console.log(updatedFeedback)

        fetch(`http://localhost:5000/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFeedback)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Feedback has been Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }
    return (
        <div className="w-1/2 mx-auto border shadow-sm my-6">
            <div className="card-body">
                <p>Give Feedback</p>
                <form onSubmit={handleFeedback}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Feedback </span>
                        </label>
                        <textarea name="feedback" className="textarea textarea-bordered" rows="8">

                        </textarea>
                    </div>

                    <div className="form-control mt-6 w-1/2 mx-auto">
                        <input type="submit" className="btn btn-outline btn-accent" value="Send Feedback"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Feedback;