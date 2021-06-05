function getDateWithoutTime(date) {
  return require("moment")(date).format("YYYY-MM-DD");
}

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = hour + ":" + min;
  return time;
}

const array = [
  {
    name: "CGV nhà làm",
    name_cat: "2D",
    id: 17,
    start_point: "2021-06-04T15:25:00.000Z",
    end_point: "2021-06-03T17:25:00.000Z",
  },
  {
    name: "CGV nhà làm",
    name_cat: "2D",
    id: 18,
    start_point: "2021-06-04T15:15:00.000Z",
    end_point: "2021-06-04T17:25:00.000Z",
  },
];

function detailsCat(name_cat, id, start_point) {
  const res = {
    cate_room: name_cat,
    schedule: [
      {
        id_schedule: id,
        time: timeConverter(start_point),
      },
    ],
  };
  return res;
}

let Show = [];
let details = [];

for (let ko of array) {
  const existsCineplex = details.find((de) => de.cineplex === ko.name);
  // if not exists
  if (existsCineplex === undefined) {
    const ttkk = {
      cineplex: ko.name,
      detailsCat: [
        {
          cate_room: ko.name_cat,
          schedule: [
            {
              id_schedule: ko.id,
              time: timeConverter(ko.start_point),
            },
          ],
        },
      ],
    };
    details.push(ttkk);
  } else {
    const existsDetailsCat = existsCineplex.detailsCat.find(
      (de) => de.cate_room === ko.name_cat
    );

    const indexCine = details.findIndex(
      (e) => e.cineplex === existsCineplex.cineplex
    );
    if (existsDetailsCat === undefined) {
      // cate_room undefined
      details[indexCine].detailsCat.push(
        detailsCat(ko.name_cat, ko.id, ko.start_point)
      );
    } else {
      // cate_room not undefined
      const indexSche = details[indexCine].detailsCat.findIndex(
        (e) => e.cate_room === ko.name_cat
      );
      details[indexCine].detailsCat[indexSche].schedule.push({
        id_schedule: ko.id,
        time: timeConverter(ko.start_point),
      });
    }
  }
}

Show.push({
  date: "05/06/2021",
  details: details,
});

let kkkkk = JSON.stringify(Show);
console.log(kkkkk);
