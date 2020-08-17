const presidents = [
  {
      name: 'John Adams',
      isOnline:true,
      isIdle: false,
      isAway: false,
  },
  {
      name: 'Thomas Jefferson',
      isOnline: false,
      isIdle: true,
      isAway: false,
  },
  {
      name: 'James Madison',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'James Monroe',
      isOnline: true,
      isIdle: false,
      isAway: false,
  },
  {
      name: 'John Quincy Adams',
      isOnline:true,
      isIdle: false,
      isAway: false,
  },
  {
      name: 'Andrew Jackson',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Martin Van Buren',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'William Henry Harrison',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'John Tyler',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'James K. Polk',
      isOnline:true,
      isIdle: false,
      isAway: false,
  },
  {
      name: 'Zachary Taylor',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Millard Fillmore',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Franklin Pierce',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'James Buchanan',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Abraham Lincoln',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Andrew Johnson',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Ulysses S. Grant',
      isOnline:false,
      isIdle: true,
      isAway: false,
  },
  {
      name: 'Rutherford B. Hayes',
      isOnline:false,
      isIdle: true,
      isAway: false,
  },
  {
      name: 'James Garfield',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Chester A. Arthur',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Grover Cleveland',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Benjamin Harrison',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'William McKinley',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Theodore Roosevelt',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'William Howard Taft',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Woodrow Wilson',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Warren G. Harding',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Calvin Coolidge',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Herbert Hoover',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Franklin D. Roosevelt',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Harry S. Truman',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Dwight D. Eisenhower',
      iisOnline:false,
      isIdle: true,
      isAway: false,
  },
  {
      name: 'John F. Kennedy',
      isOnline:false,
      isIdle: true,
      isAway: false,
  },
  {
      name: 'Lyndon B. Johnson',
      isOnline:false,
      isIdle: true,
      isAway: false,
  },
  {
      name: 'Richard M. Nixon',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Gerald R. Ford',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'James Carter',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'Ronald Reagan',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'George H. W. Bush',
      isOnline:false,
      isIdle: false,
      isAway: true,
  },
  {
      name: 'William J. Clinton',
      isOnline: true,
      isIdle: false,
      isAway: false,
  },
  {
      name: 'George W. Bush',
      isOnline:true,
      isIdle: false,
      isAway: false,
  },
  {
      name: 'Barack Obama',
      isOnline:false,
      isIdle: true,
      isAway: false,
  },
  {
      name: 'Donald J. Trump',
      isOnline:false,
      isIdle: true,
      isAway: false,
  }
];

/*
const presidents = [
    {
        name: 'George W. Bush',
        isOnline: false,
        isAway: false,
        isIdle: true
      },
      {
        name: 'John F. Kennedy',
        isOnline: true,
        isAway: false,
        isIdle: false
      },
      {
        name: 'Donald J. Trump',
        isOnline: true,
        isAway: false,
        isIdle: false
      },
      {
        name: 'George Washington',
        isOnline: true,
        isAway: false,
        isIdle: false
      },
      {
        name: 'Thomas Jefferson',
        isOnline: true,
        isAway: false,
        isIdle: false
      },
      {
        name: 'Warren G. Harding',
        isOnline: true,
        isAway: false,
        isIdle: false
      },
      {
        name: 'Theodore Roosevelt',
        isOnline: true,
        isAway: false,
        isIdle: false
      },
      {
        name: 'Barack Obama',
        isOnline: false,
        isAway: false,
        isIdle: true
      },
      {
        name: 'Harry S. Truman',
        isOnline: false,
        isAway: true,
        isIdle: false
      },
      {
        name: 'Abraham Lincoin',
        isOnline: false,
        isAway: true,
        isIdle: false
      },
      {
        name: 'James Garfield',
        isOnline: false,
        isAway: true,
        isIdle: false
      },
      {
        name: 'Chester A. Arthur',
        isOnline: false,
        isAway: true,
        isIdle: false
      },
      {
        name: 'Abraham Lincoin',
        isOnline: false,
        isAway: true,
        isIdle: false
      },
      {
        name: 'James Garfield',
        isOnline: false,
        isAway: true,
        isIdle: false
      },
      {
        name: 'Chester A. Arthur',
        isOnline: false,
        isAway: true,
        isIdle: false
      },
      {
        name: 'John Tyler',
        isOnline: false,
        isAway: true,
        isIdle: false
      },
      {
        name: 'William McKinley',
        isOnline: false,
        isAway: true,
        isIdle: false
      },
      {
        name: 'Lyndon B. Johnson',
        isOnline: false,
        isAway: true,
        isIdle: false
      }

];
*/