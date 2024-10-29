export default function Upcoming() {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${"17f1ceadcf3767a35e55dd6204800668"}`)
    return <h2>Upcoming</h2>
}