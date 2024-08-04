const complexObject = {
  name: "CareerSync",
  version: 1.0,
  isActive: true,
  details: {
    creator: "Amir",
    location: "Pakistan",
    features: ["job portal", "payroll management", "employee management"],
    metadata: {
      createdAt: new Date(),
      tags: ["tech", "jobs", "HR"],
      nested: {
        level1: {
          level2: {
            level3: "deep",
          },
        },
      },
    },
  },
  list: [1, 2, { nestedObj: "value", nestedArr: [3, 4, 5] }],
  func: function () {
    console.log("test function");
  },
};

function makeDeepCopy(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  let copiedVal = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copiedVal[key] = makeDeepCopy(obj[key]);
    }
  }
  return copiedVal;
}
const copy1= makeDeepCopy(complexObject)
copy1.details.creator='Hammad Ali Anwar'
complexObject.details.creator='jaduu'
console.log(copy1);
console.log(complexObject);