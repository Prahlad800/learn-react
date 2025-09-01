import './filter.css'

export default function Filter() {
    return (
        <div className="filter-container">
            <label htmlFor="age-filter">Filter by Age: </label>
            <select id="age-filter">
                <option value="">All Ages</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>
        </div>
    )
}


