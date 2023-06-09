import './app-info.css';

const AppInfo = (props) => {
    const {total, increased} = props;
    return (
        <div className="app-info">
            <h1>Accounting of employees in N company</h1>
            <h2>Total number of employees: {total}</h2>
            <h2>The award will be given to: {increased}</h2>
        </div>
    )
}

export default AppInfo;