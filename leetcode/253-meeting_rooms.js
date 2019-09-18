// Given an array of meeting time intervals consisting of start and end times[[s1, e1], [s2, e2],...](si < ei), find the minimum number of conference rooms required.
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {

  intervals = intervals.sort((a, b) => a[0] - b[0])
  let meetingsInProgress = []
  let maxMeetings = 0;

  for (let i = 0; i < intervals.length; i++) {
    let meeting = intervals[i];
    meetingsInProgress = meetingsInProgress.filter(meetingInProgress => meetingInProgress[1] > meeting[0])
    meetingsInProgress.push(meeting)
    maxMeetings = Math.max(maxMeetings, meetingsInProgress.length)
  }

  return maxMeetings;
};