export default function Top() {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${"17f1ceadcf3767a35e55dd6204800668"}`)
    return <h2>Top Rated</h2>
}   