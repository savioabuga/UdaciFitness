import { AsyncStorage } from "react-native";
import { CALENDAR_STORAGE_KEY, formatCalendarResults } from './_calendar';

export function submitEntry( { entry, key }) {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function removeEntry() {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      AsyncStorage.setItem(CALENDAR_STORAGE_KEY,JSON.stringify(data ))
    })
}


export function fetchCalendarResults() {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then(formatCalendarResults)
}
