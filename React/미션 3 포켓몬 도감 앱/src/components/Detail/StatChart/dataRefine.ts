import { STAT_NAMES } from "../../../constant/StatNames"

function dataRefine(stats: number[]) {
  const max = [255, 180, 230, 180, 230, 180]
  return stats.map((stat, idx) => ({
    subject: STAT_NAMES[idx],
    A: stat / max[idx],
    fullMark: 1
  }))
}

export default dataRefine
