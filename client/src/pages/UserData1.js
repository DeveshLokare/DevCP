const UserData = ({ users, isUpcomingContests }) => {
    return (
        <>
            {users.map((curUser) => {
                
                const { id, name, type, durationSeconds, relativeTimeSeconds } = curUser;
                const now = Math.floor(Date.now() / 1000); 
                const days = Math.floor(-relativeTimeSeconds / (24 * 60 * 60));
                const hours = Math.floor((-relativeTimeSeconds % (24 * 60 * 60)) / (60 * 60));
                const minutes = Math.floor((-relativeTimeSeconds % (60 * 60)) / 60);
                const seconds = Math.floor(-relativeTimeSeconds % 60);
                const currentDate = new Date();
                const currentMonth = currentDate.getMonth(); 
                const currentYear = currentDate.getFullYear();
                const currentDay = currentDate.getDate();
                const currentHour = currentDate.getHours();
                const currentMinute = currentDate.getMinutes();
                const currentSecond = currentDate.getSeconds();
                const d = Math.floor((days + currentDay)%31);
                const h = Math.floor((hours + currentHour - 2))%24;
                const m = Math.floor((minutes + currentMinute +30)%60);
                const s = Math.floor((seconds + currentSecond)%60);

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
                                    href={`https://www.timeanddate.com/worldclock/fixedtime.html?day=${d}&month=7&year=2023&hour=${h}&min=${m}&sec=${s}&p1=166`}
                                >
                                    <button className="button">Enter</button>
                                    <div>{days}d {hours}h {minutes}min {seconds}s </div>
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