import Property from "./Property";
export default function PropertyList({ properties }) {
    return(
        <div>
            {properties.map(p =>(
                <Property key={p.id}{...p}/>
            ))}
        </div>
    )
}
