import { monTimings, tueTimings, wedTimings, thuTimings, friTimings } from '../constants/timings'
import { uploadText } from './apiCalls'
import { parseAndReturn } from './parseResponse'

interface CourseProps {
  slot: string
  courseCode: string
  courseType: string
  courseName: string
  location: string
  startTime: Date
  endTime: Date
}

export const removeSlot =
  (slot: string,
    monSlots: CourseProps[],
    tueSlots: CourseProps[],
    wedSlots: CourseProps[],
    thuSlots: CourseProps[],
    friSlots: CourseProps[]
  ): CourseProps[][] => {
    monSlots = monSlots.filter((course) => course.slot !== slot)
    tueSlots = tueSlots.filter((course) => course.slot !== slot)
    wedSlots = wedSlots.filter((course) => course.slot !== slot)
    thuSlots = thuSlots.filter((course) => course.slot !== slot)
    friSlots = friSlots.filter((course) => course.slot !== slot)
    return [monSlots, tueSlots, wedSlots, thuSlots, friSlots]
  }

const isFilled = (dailySlots: CourseProps[][], courseTBA: any): boolean => {
  const filledSlots: string[] = []
  dailySlots.forEach((daySlots) => {
    daySlots.forEach((course) => {
      if (!filledSlots.includes(course.slot)) filledSlots.push(course.slot)
    })
  })
  if (filledSlots.includes(courseTBA.Slot)) return true
  return false
}

export const addSlot =
  async (txt: string,
    monSlots: CourseProps[],
    tueSlots: CourseProps[],
    wedSlots: CourseProps[],
    thuSlots: CourseProps[],
    friSlots: CourseProps[]
  ): Promise<CourseProps[][]> => {
    const res = await uploadText(txt)
    let commonSlot = false
    res.Slots.forEach((courseTBA: any) => {
      if (isFilled([monSlots, tueSlots, wedSlots, thuSlots, friSlots], courseTBA)) {
        alert('Remove all occurences of the slot from the timetable first!')
        commonSlot = true
      }
    })
    if (commonSlot) return [monSlots, tueSlots, wedSlots, thuSlots, friSlots]
    const [monDummy, tueDummy, wedDummy, thuDummy, friDummy] = parseAndReturn(res.Slots)
    monSlots.push(...monDummy)
    tueSlots.push(...tueDummy)
    wedSlots.push(...wedDummy)
    thuSlots.push(...thuDummy)
    friSlots.push(...friDummy)
    monSlots.sort((a, b) => (monTimings[a.slot] > monTimings[b.slot] ? 1 : -1))
    tueSlots.sort((a, b) => (tueTimings[a.slot] > tueTimings[b.slot] ? 1 : -1))
    wedSlots.sort((a, b) => (wedTimings[a.slot] > wedTimings[b.slot] ? 1 : -1))
    thuSlots.sort((a, b) => (thuTimings[a.slot] > thuTimings[b.slot] ? 1 : -1))
    friSlots.sort((a, b) => (friTimings[a.slot] > friTimings[b.slot] ? 1 : -1))
    return [monSlots, tueSlots, wedSlots, thuSlots, friSlots]
  }
