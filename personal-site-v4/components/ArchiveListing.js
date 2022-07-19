export default function ArchiveListing({ props }) {
    return (
        <div >
            <div>
                <h3><a href={"/blog/" + props.uuid}>{props.title}</a></h3>
                <p>
                    {props.short_description}
                    <a href={"/blog/" + props.uuid}>Read More...</a>
                </p>
            </div>
        </div>
    );
}