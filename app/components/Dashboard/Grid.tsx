import { StatCards } from "./StatCards"
import { ActivityGraph } from "./ActivityGraph"
import { UsageRadar } from "./UsergeRadar"
import { RecentTransaction } from "./RecentTransaction"


export const Grid = () => {
    return (
        <div className="px-4 grid gap-3 grid-cols-12 "
        >
            <StatCards />
            <ActivityGraph />
            <UsageRadar />
            <RecentTransaction />
        </div>
    )
}
