import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>

            <br />
            {error && (
                <div>
                    <p>{error.statusText || error.message}</p>
                    <p>{error.status}</p>
                </div>
            )}

        </div>
    );
}