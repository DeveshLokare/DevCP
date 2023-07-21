const UserData = ({ users, isUpcomingContests }) => {
    return (
        <>
            {users.map((curUser) => {
                const { id, name, type, durationSeconds, relativeTimeSeconds } = curUser;

                const getTimeString = (relativeTimeSeconds) => {
                    const now = Math.floor(Date.now() / 1000); // Current time in seconds
                    //const remainingTime = relativeTime - now;
                    const days = Math.floor(-relativeTimeSeconds / (24 * 60 * 60));
                    const hours = Math.floor((-relativeTimeSeconds % (24 * 60 * 60)) / (60 * 60));
                    const minutes = Math.floor((-relativeTimeSeconds % (60 * 60)) / 60);
                    const seconds = Math.floor(-relativeTimeSeconds % 60);
                    const currentDate = new Date();
                    const currentMonth = currentDate.getMonth(); // Returns the month as a zero-based index (0 - 11)
                    const currentYear = currentDate.getFullYear(); // Returns the four-digit year
                    const currentDay = currentDate.getDate();

                    return `${days}d ${hours}h ${minutes}m ${seconds}s  `;

                };



                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{type}</td>
                        <td>
                            {`${Math.floor(durationSeconds / 3600)}:${Math.floor((durationSeconds % 3600) / 60)}`}
                        </td>
                        <td>
                            {isUpcomingContests ? (
                                <a
                                    href={`https://www.timeanddate.com/worldclock/fixedtime.html?day=21&month=7&year=2023&hour=17&min=35&sec=0&p1=166`}
                                >
                                    <button className="button">Enter</button>
                                    <div>{getTimeString(relativeTimeSeconds)}</div>
                                </a>
                            ) : (
                                <a href={`https://codeforces.com/contest/${id}`}>
                                    <button className="button">Enter</button>
                                </a>
                            )}
                        </td>
                    </tr>
                );
            })}
        </>
    );
};

export default UserData;