// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Vitals {
  systolicBloodPressure: Observation[]
  diastolicBloodPressure: Observation[]
  heartRate: Observation[]
  weight: Observation[]
  dryWeight: number
}

interface Observation {
  date: Date
  value: number
}
