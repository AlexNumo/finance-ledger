import PeopleIMG from '../../images/home/people.jpg';

const LookingFor = () => {
    return (
        <>
        <div>
            <picture>
                <source srcset="photo.webp 1x, photo@2x.webp 2x" type="image/webp" />
                <source srcset="photo.jpg 1x, photo@2x.jpg 2x" type="image/jpeg" />
                <img src="photo.jpg" alt="Кот" />
            </picture>
        </div>
        </>
    )
};

export default LookingFor;