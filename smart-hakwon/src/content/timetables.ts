/**
 * Timetable data for the Timetable and Intensive Class pages.
 * Edit rows here — the pages render them through <GradeTabs> / <ScheduleTable>.
 * Column keys double as CSS classes (c1 = course, gr = grade, cl = class,
 * dy = day, tm = time, tut = tutor) which drive the mobile card layout.
 */

export interface ScheduleColumn {
  key: string;
  label: string;
}

export interface ScheduleBand {
  id: string;
  label: string;
  columns: ScheduleColumn[];
  rows: Record<string, string>[];
  /** Optional per-table column widths (CSS grid-template-columns). */
  gridTemplateColumns?: string;
}

export const timetableTimetableEn: ScheduleBand[] = [
  {
    "id": "ib",
    "label": "G11–12 · IB Math",
    "columns": [
      {
        "key": "c1",
        "label": "Course"
      },
      {
        "key": "gr",
        "label": "Grade"
      },
      {
        "key": "cl",
        "label": "Class"
      },
      {
        "key": "dy",
        "label": "Day"
      },
      {
        "key": "tm",
        "label": "Time"
      },
      {
        "key": "tut",
        "label": "Tutor"
      }
    ],
    "rows": [
      {
        "c1": "IB Math AA HL",
        "gr": "G12",
        "cl": "Nov",
        "dy": "Tue",
        "tm": "19:15–21:15",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G12",
        "cl": "OFS",
        "dy": "Sun",
        "tm": "09:00–11:00",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G12",
        "cl": "UWC Dover 1",
        "dy": "Sat",
        "tm": "14:00–16:00",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G12",
        "cl": "UWC Dover 2",
        "dy": "Fri",
        "tm": "19:15–21:15",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA SL",
        "gr": "G12",
        "cl": "Combined",
        "dy": "Fri",
        "tm": "19:15–21:15",
        "tut": "Alex"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G11",
        "cl": "Nov A",
        "dy": "Sun",
        "tm": "16:15–18:15",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G11",
        "cl": "Nov B",
        "dy": "Sat",
        "tm": "16:15–18:15",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G11",
        "cl": "OFS",
        "dy": "Sat",
        "tm": "09:00–11:00",
        "tut": "Alex"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G11",
        "cl": "UWC Dover 1",
        "dy": "Sat",
        "tm": "11:15–13:15",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G11",
        "cl": "UWC Dover 2",
        "dy": "Sun",
        "tm": "11:15–13:15",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G11",
        "cl": "UWC East",
        "dy": "Sat",
        "tm": "16:15–18:15",
        "tut": "Alex"
      },
      {
        "c1": "IB Math AA SL",
        "gr": "G11",
        "cl": "Nov",
        "dy": "Thu",
        "tm": "19:15–21:15",
        "tut": "Alex"
      },
      {
        "c1": "IB Math AA SL",
        "gr": "G11",
        "cl": "Combined",
        "dy": "Mon",
        "tm": "19:15–21:15",
        "tut": "Alex"
      }
    ]
  },
  {
    "id": "igcse",
    "label": "G9–10 · IGCSE Math",
    "columns": [
      {
        "key": "c1",
        "label": "Course"
      },
      {
        "key": "gr",
        "label": "Grade"
      },
      {
        "key": "cl",
        "label": "Class"
      },
      {
        "key": "dy",
        "label": "Day"
      },
      {
        "key": "tm",
        "label": "Time"
      },
      {
        "key": "tut",
        "label": "Tutor"
      }
    ],
    "rows": [
      {
        "c1": "IB Math AA HL (advanced)",
        "gr": "G10",
        "cl": "G10 Advanced",
        "dy": "Sun",
        "tm": "14:00–16:00",
        "tut": "Sunny"
      },
      {
        "c1": "Additional Math",
        "gr": "G10",
        "cl": "Class A",
        "dy": "Fri",
        "tm": "17:00–19:00",
        "tut": "Alex"
      },
      {
        "c1": "Additional Math",
        "gr": "G10",
        "cl": "Class B",
        "dy": "Fri",
        "tm": "17:00–19:00",
        "tut": "Sunny"
      },
      {
        "c1": "Additional Math",
        "gr": "G10",
        "cl": "Class C",
        "dy": "Wed",
        "tm": "17:00–19:00",
        "tut": "Sunny"
      },
      {
        "c1": "Additional Math",
        "gr": "G10",
        "cl": "Nov",
        "dy": "Sat",
        "tm": "11:15–13:15",
        "tut": "Alex"
      },
      {
        "c1": "Additional Math",
        "gr": "G10",
        "cl": "Class S",
        "dy": "Tue",
        "tm": "17:00–19:00",
        "tut": "Alex"
      },
      {
        "c1": "Additional Math",
        "gr": "G9",
        "cl": "Advanced Nov",
        "dy": "Sat",
        "tm": "14:00–16:00",
        "tut": "Alex"
      },
      {
        "c1": "Additional Math",
        "gr": "G9",
        "cl": "Class A",
        "dy": "Mon",
        "tm": "17:00–19:00",
        "tut": "Alex"
      },
      {
        "c1": "Additional Math",
        "gr": "G9",
        "cl": "Class B",
        "dy": "Thu",
        "tm": "17:00–19:00",
        "tut": "Serena"
      },
      {
        "c1": "Additional Math",
        "gr": "G9",
        "cl": "Class C",
        "dy": "Sat",
        "tm": "09:00–11:00",
        "tut": "Sunny"
      },
      {
        "c1": "Extended Math",
        "gr": "G9",
        "cl": "—",
        "dy": "Tue",
        "tm": "19:15–21:15",
        "tut": "Sunny"
      }
    ]
  },
  {
    "id": "lower",
    "label": "Primary – G8 Math",
    "columns": [
      {
        "key": "c1",
        "label": "Course"
      },
      {
        "key": "gr",
        "label": "Grade"
      },
      {
        "key": "cl",
        "label": "Class"
      },
      {
        "key": "dy",
        "label": "Day"
      },
      {
        "key": "tm",
        "label": "Time"
      },
      {
        "key": "tut",
        "label": "Tutor"
      }
    ],
    "rows": [
      {
        "c1": "Math",
        "gr": "G8",
        "cl": "Class A",
        "dy": "Thu",
        "tm": "17:00–19:00",
        "tut": "Alex"
      },
      {
        "c1": "Math",
        "gr": "G8",
        "cl": "Class B",
        "dy": "Sat",
        "tm": "14:00–16:00",
        "tut": "Serena"
      },
      {
        "c1": "Math",
        "gr": "G7",
        "cl": "Class A",
        "dy": "Sun",
        "tm": "14:00–16:00",
        "tut": "Nidhi"
      },
      {
        "c1": "Math",
        "gr": "G7",
        "cl": "Class B",
        "dy": "Sat",
        "tm": "16:15–18:15",
        "tut": "Nidhi"
      },
      {
        "c1": "Math",
        "gr": "G7",
        "cl": "Class C",
        "dy": "Sun",
        "tm": "16:15–18:15",
        "tut": "Nidhi"
      },
      {
        "c1": "Math",
        "gr": "G7",
        "cl": "Nov",
        "dy": "Wed",
        "tm": "17:00–19:00",
        "tut": "Serena"
      },
      {
        "c1": "Math",
        "gr": "G6",
        "cl": "—",
        "dy": "Thu",
        "tm": "17:00–19:00",
        "tut": "Nidhi"
      },
      {
        "c1": "Pre-Algebra",
        "gr": "G5",
        "cl": "Class A",
        "dy": "Fri",
        "tm": "17:00–19:00",
        "tut": "Serena"
      },
      {
        "c1": "Pre-Algebra",
        "gr": "G5",
        "cl": "Class B",
        "dy": "Tue",
        "tm": "17:00–19:00",
        "tut": "Serena"
      },
      {
        "c1": "P3 Local Math",
        "gr": "P3",
        "cl": "—",
        "dy": "Fri",
        "tm": "14:45–16:45",
        "tut": "Sunny"
      }
    ]
  }
];

export const timetableTimetableKo: ScheduleBand[] = [
  {
    "id": "ib",
    "label": "G11–12 · IB 수학",
    "columns": [
      {
        "key": "c1",
        "label": "과목"
      },
      {
        "key": "gr",
        "label": "학년"
      },
      {
        "key": "cl",
        "label": "반"
      },
      {
        "key": "dy",
        "label": "요일"
      },
      {
        "key": "tm",
        "label": "시간"
      },
      {
        "key": "tut",
        "label": "강사"
      }
    ],
    "rows": [
      {
        "c1": "IB Math AA HL",
        "gr": "G12",
        "cl": "Nov",
        "dy": "화",
        "tm": "19:15–21:15",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G12",
        "cl": "OFS",
        "dy": "일",
        "tm": "09:00–11:00",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G12",
        "cl": "UWC Dover 1",
        "dy": "토",
        "tm": "14:00–16:00",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G12",
        "cl": "UWC Dover 2",
        "dy": "금",
        "tm": "19:15–21:15",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA SL",
        "gr": "G12",
        "cl": "통합반",
        "dy": "금",
        "tm": "19:15–21:15",
        "tut": "Alex"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G11",
        "cl": "Nov A",
        "dy": "일",
        "tm": "16:15–18:15",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G11",
        "cl": "Nov B",
        "dy": "토",
        "tm": "16:15–18:15",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G11",
        "cl": "OFS",
        "dy": "토",
        "tm": "09:00–11:00",
        "tut": "Alex"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G11",
        "cl": "UWC Dover 1",
        "dy": "토",
        "tm": "11:15–13:15",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G11",
        "cl": "UWC Dover 2",
        "dy": "일",
        "tm": "11:15–13:15",
        "tut": "Sunny"
      },
      {
        "c1": "IB Math AA HL",
        "gr": "G11",
        "cl": "UWC East",
        "dy": "토",
        "tm": "16:15–18:15",
        "tut": "Alex"
      },
      {
        "c1": "IB Math AA SL",
        "gr": "G11",
        "cl": "Nov",
        "dy": "목",
        "tm": "19:15–21:15",
        "tut": "Alex"
      },
      {
        "c1": "IB Math AA SL",
        "gr": "G11",
        "cl": "통합반",
        "dy": "월",
        "tm": "19:15–21:15",
        "tut": "Alex"
      }
    ]
  },
  {
    "id": "igcse",
    "label": "G9–10 · IGCSE 수학",
    "columns": [
      {
        "key": "c1",
        "label": "과목"
      },
      {
        "key": "gr",
        "label": "학년"
      },
      {
        "key": "cl",
        "label": "반"
      },
      {
        "key": "dy",
        "label": "요일"
      },
      {
        "key": "tm",
        "label": "시간"
      },
      {
        "key": "tut",
        "label": "강사"
      }
    ],
    "rows": [
      {
        "c1": "IB Math AA HL (선행)",
        "gr": "G10",
        "cl": "G10 선행반",
        "dy": "일",
        "tm": "14:00–16:00",
        "tut": "Sunny"
      },
      {
        "c1": "Additional Math",
        "gr": "G10",
        "cl": "A반",
        "dy": "금",
        "tm": "17:00–19:00",
        "tut": "Alex"
      },
      {
        "c1": "Additional Math",
        "gr": "G10",
        "cl": "B반",
        "dy": "금",
        "tm": "17:00–19:00",
        "tut": "Sunny"
      },
      {
        "c1": "Additional Math",
        "gr": "G10",
        "cl": "C반",
        "dy": "수",
        "tm": "17:00–19:00",
        "tut": "Sunny"
      },
      {
        "c1": "Additional Math",
        "gr": "G10",
        "cl": "Nov",
        "dy": "토",
        "tm": "11:15–13:15",
        "tut": "Alex"
      },
      {
        "c1": "Additional Math",
        "gr": "G10",
        "cl": "S반",
        "dy": "화",
        "tm": "17:00–19:00",
        "tut": "Alex"
      },
      {
        "c1": "Additional Math",
        "gr": "G9",
        "cl": "Advanced Nov",
        "dy": "토",
        "tm": "14:00–16:00",
        "tut": "Alex"
      },
      {
        "c1": "Additional Math",
        "gr": "G9",
        "cl": "A반",
        "dy": "월",
        "tm": "17:00–19:00",
        "tut": "Alex"
      },
      {
        "c1": "Additional Math",
        "gr": "G9",
        "cl": "B반",
        "dy": "목",
        "tm": "17:00–19:00",
        "tut": "Serena"
      },
      {
        "c1": "Additional Math",
        "gr": "G9",
        "cl": "C반",
        "dy": "토",
        "tm": "09:00–11:00",
        "tut": "Sunny"
      },
      {
        "c1": "Extended Math",
        "gr": "G9",
        "cl": "—",
        "dy": "화",
        "tm": "19:15–21:15",
        "tut": "Sunny"
      }
    ]
  },
  {
    "id": "lower",
    "label": "초등 – G8 수학",
    "columns": [
      {
        "key": "c1",
        "label": "과목"
      },
      {
        "key": "gr",
        "label": "학년"
      },
      {
        "key": "cl",
        "label": "반"
      },
      {
        "key": "dy",
        "label": "요일"
      },
      {
        "key": "tm",
        "label": "시간"
      },
      {
        "key": "tut",
        "label": "강사"
      }
    ],
    "rows": [
      {
        "c1": "수학",
        "gr": "G8",
        "cl": "A반",
        "dy": "목",
        "tm": "17:00–19:00",
        "tut": "Alex"
      },
      {
        "c1": "수학",
        "gr": "G8",
        "cl": "B반",
        "dy": "토",
        "tm": "14:00–16:00",
        "tut": "Serena"
      },
      {
        "c1": "수학",
        "gr": "G7",
        "cl": "A반",
        "dy": "일",
        "tm": "14:00–16:00",
        "tut": "Nidhi"
      },
      {
        "c1": "수학",
        "gr": "G7",
        "cl": "B반",
        "dy": "토",
        "tm": "16:15–18:15",
        "tut": "Nidhi"
      },
      {
        "c1": "수학",
        "gr": "G7",
        "cl": "C반",
        "dy": "일",
        "tm": "16:15–18:15",
        "tut": "Nidhi"
      },
      {
        "c1": "수학",
        "gr": "G7",
        "cl": "Nov",
        "dy": "수",
        "tm": "17:00–19:00",
        "tut": "Serena"
      },
      {
        "c1": "수학",
        "gr": "G6",
        "cl": "—",
        "dy": "목",
        "tm": "17:00–19:00",
        "tut": "Nidhi"
      },
      {
        "c1": "Pre-Algebra",
        "gr": "G5",
        "cl": "A반",
        "dy": "금",
        "tm": "17:00–19:00",
        "tut": "Serena"
      },
      {
        "c1": "Pre-Algebra",
        "gr": "G5",
        "cl": "B반",
        "dy": "화",
        "tm": "17:00–19:00",
        "tut": "Serena"
      },
      {
        "c1": "P3 Local Math",
        "gr": "P3",
        "cl": "—",
        "dy": "금",
        "tm": "14:45–16:45",
        "tut": "Sunny"
      }
    ]
  }
];

export const intensiveTimetableEn: ScheduleBand[] = [
  {
    "id": "ib",
    "label": "G11–12 · IB Math",
    "columns": [
      {
        "key": "gr",
        "label": "Grade"
      },
      {
        "key": "c1",
        "label": "Course"
      },
      {
        "key": "dy",
        "label": "Days"
      },
      {
        "key": "tm",
        "label": "Time"
      },
      {
        "key": "tut",
        "label": "Tutor"
      }
    ],
    "rows": [
      {
        "gr": "G12",
        "c1": "IB Math AA HL (OFS)",
        "dy": "Mon / Wed / Fri",
        "tm": "09:00–11:00",
        "tut": "Sunny"
      },
      {
        "gr": "G12",
        "c1": "IB Math AA HL (UWC Dover)",
        "dy": "Tue / Thu / Sat",
        "tm": "09:00–11:00",
        "tut": "Sunny"
      },
      {
        "gr": "G12",
        "c1": "IB Math AA HL",
        "dy": "Tue / Thu / Sat",
        "tm": "16:15–18:15",
        "tut": "Sunny"
      },
      {
        "gr": "G12",
        "c1": "IB Math AA SL",
        "dy": "Tue / Thu",
        "tm": "09:00–11:00",
        "tut": "Alex"
      },
      {
        "gr": "G11",
        "c1": "IB Math AA HL · Class A",
        "dy": "Tue / Thu / Sat",
        "tm": "11:15–13:15",
        "tut": "Alex"
      },
      {
        "gr": "G11",
        "c1": "IB Math AA HL · Class B",
        "dy": "Mon / Wed / Fri",
        "tm": "11:15–13:15",
        "tut": "Sunny"
      },
      {
        "gr": "G11",
        "c1": "IB Math AA SL",
        "dy": "Mon / Fri",
        "tm": "09:00–11:00",
        "tut": "Alex"
      }
    ],
    "gridTemplateColumns": ".5fr 1.6fr 1.2fr 1.2fr .8fr"
  },
  {
    "id": "igcse",
    "label": "G9–10 · IGCSE Math",
    "columns": [
      {
        "key": "gr",
        "label": "Grade"
      },
      {
        "key": "c1",
        "label": "Course"
      },
      {
        "key": "dy",
        "label": "Days"
      },
      {
        "key": "tm",
        "label": "Time"
      },
      {
        "key": "tut",
        "label": "Tutor"
      }
    ],
    "rows": [
      {
        "gr": "G10",
        "c1": "Additional Math",
        "dy": "Mon / Fri",
        "tm": "16:15–18:15",
        "tut": "Alex"
      },
      {
        "gr": "G9",
        "c1": "Additional Math",
        "dy": "Mon / Fri",
        "tm": "11:15–13:15",
        "tut": "Alex"
      }
    ],
    "gridTemplateColumns": ".5fr 1.6fr 1.2fr 1.2fr .8fr"
  },
  {
    "id": "lower",
    "label": "Primary – G8 Math",
    "columns": [
      {
        "key": "gr",
        "label": "Grade"
      },
      {
        "key": "c1",
        "label": "Course"
      },
      {
        "key": "dy",
        "label": "Days"
      },
      {
        "key": "tm",
        "label": "Time"
      },
      {
        "key": "tut",
        "label": "Tutor"
      }
    ],
    "rows": [
      {
        "gr": "G8",
        "c1": "Math",
        "dy": "Mon / Fri",
        "tm": "14:00–16:00",
        "tut": "Serena"
      },
      {
        "gr": "G5",
        "c1": "Pre-Algebra",
        "dy": "Tue / Sat",
        "tm": "14:00–16:00 or 09:00–11:00",
        "tut": "Serena"
      }
    ],
    "gridTemplateColumns": ".5fr 1.6fr 1.2fr 1.2fr .8fr"
  }
];

export const intensiveTimetableKo: ScheduleBand[] = [
  {
    "id": "ib",
    "label": "G11–12 · IB 수학",
    "columns": [
      {
        "key": "gr",
        "label": "학년"
      },
      {
        "key": "c1",
        "label": "과목"
      },
      {
        "key": "dy",
        "label": "요일"
      },
      {
        "key": "tm",
        "label": "시간"
      },
      {
        "key": "tut",
        "label": "강사"
      }
    ],
    "rows": [
      {
        "gr": "G12",
        "c1": "IB Math AA HL (OFS)",
        "dy": "월 / 수 / 금",
        "tm": "09:00–11:00",
        "tut": "Sunny"
      },
      {
        "gr": "G12",
        "c1": "IB Math AA HL (UWC Dover)",
        "dy": "화 / 목 / 토",
        "tm": "09:00–11:00",
        "tut": "Sunny"
      },
      {
        "gr": "G12",
        "c1": "IB Math AA HL",
        "dy": "화 / 목 / 토",
        "tm": "16:15–18:15",
        "tut": "Sunny"
      },
      {
        "gr": "G12",
        "c1": "IB Math AA SL",
        "dy": "화 / 목",
        "tm": "09:00–11:00",
        "tut": "Alex"
      },
      {
        "gr": "G11",
        "c1": "IB Math AA HL · A반",
        "dy": "화 / 목 / 토",
        "tm": "11:15–13:15",
        "tut": "Alex"
      },
      {
        "gr": "G11",
        "c1": "IB Math AA HL · B반",
        "dy": "월 / 수 / 금",
        "tm": "11:15–13:15",
        "tut": "Sunny"
      },
      {
        "gr": "G11",
        "c1": "IB Math AA SL",
        "dy": "월 / 금",
        "tm": "09:00–11:00",
        "tut": "Alex"
      }
    ],
    "gridTemplateColumns": ".5fr 1.6fr 1.2fr 1.2fr .8fr"
  },
  {
    "id": "igcse",
    "label": "G9–10 · IGCSE 수학",
    "columns": [
      {
        "key": "gr",
        "label": "학년"
      },
      {
        "key": "c1",
        "label": "과목"
      },
      {
        "key": "dy",
        "label": "요일"
      },
      {
        "key": "tm",
        "label": "시간"
      },
      {
        "key": "tut",
        "label": "강사"
      }
    ],
    "rows": [
      {
        "gr": "G10",
        "c1": "Additional Math",
        "dy": "월 / 금",
        "tm": "16:15–18:15",
        "tut": "Alex"
      },
      {
        "gr": "G9",
        "c1": "Additional Math",
        "dy": "월 / 금",
        "tm": "11:15–13:15",
        "tut": "Alex"
      }
    ],
    "gridTemplateColumns": ".5fr 1.6fr 1.2fr 1.2fr .8fr"
  },
  {
    "id": "lower",
    "label": "초등 – G8 수학",
    "columns": [
      {
        "key": "gr",
        "label": "학년"
      },
      {
        "key": "c1",
        "label": "과목"
      },
      {
        "key": "dy",
        "label": "요일"
      },
      {
        "key": "tm",
        "label": "시간"
      },
      {
        "key": "tut",
        "label": "강사"
      }
    ],
    "rows": [
      {
        "gr": "G8",
        "c1": "수학",
        "dy": "월 / 금",
        "tm": "14:00–16:00",
        "tut": "Serena"
      },
      {
        "gr": "G5",
        "c1": "Pre-Algebra",
        "dy": "화 / 토",
        "tm": "14:00–16:00 또는 09:00–11:00",
        "tut": "Serena"
      }
    ],
    "gridTemplateColumns": ".5fr 1.6fr 1.2fr 1.2fr .8fr"
  }
];
