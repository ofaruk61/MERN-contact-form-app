import { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Helmet } from "react-helmet";
import { toast } from 'react-toastify';

function Home() {

    const notify = () => toast("Welcome to our APP!");
    useEffect(() => {
        notify()
    }, [])

    return (
        <>
            <Helmet>
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Alert variant="warning">
                <Alert.Heading>Welcome to Form APP!</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This
                    example text is going to run a bit longer so that you can see how
                    spacing within an alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things
                    nice and tidy.
                </p>
            </Alert>
        </>
    );
}

export default Home;