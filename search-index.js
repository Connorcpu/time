var searchIndex = {};
searchIndex['time'] = {"items":[[0,"","time","Simple time handling."],[1,"Timespec","","A record specifying a time value in seconds and nanoseconds."],[11,"sec","","",0],[11,"nsec","","",0],[1,"Tm","","Holds a calendar date and time broken down into its components (year, month, day, and so on),\nalso called a broken-down time value."],[11,"tm_sec","","Seconds after the minute - [0, 60]",1],[11,"tm_min","","Minutes after the hour - [0, 59]",1],[11,"tm_hour","","Hours after midnight - [0, 23]",1],[11,"tm_mday","","Day of the month - [1, 31]",1],[11,"tm_mon","","Months since January - [0, 11]",1],[11,"tm_year","","Years since 1900",1],[11,"tm_wday","","Days since Sunday - [0, 6]. 0 = Sunday, 1 = Monday, ..., 6 = Saturday.",1],[11,"tm_yday","","Days since January 1 - [0, 365]",1],[11,"tm_isdst","","Daylight Saving Time flag.",1],[11,"tm_utcoff","","Identifies the time zone that was used to compute this broken-down time value, including any\nadjustment for Daylight Saving Time. This is the number of seconds east of UTC. For example,\nfor U.S. Pacific Daylight Time, the value is -7*60*60 = -25200.",1],[11,"tm_nsec","","Nanoseconds after the second - [0, 10<sup>9</sup> - 1]",1],[1,"TmFmt","","A wrapper around a `Tm` and format string that implements Show."],[2,"ParseError","",""],[12,"InvalidSecond","","",2],[12,"InvalidMinute","","",2],[12,"InvalidHour","","",2],[12,"InvalidDay","","",2],[12,"InvalidMonth","","",2],[12,"InvalidYear","","",2],[12,"InvalidDayOfWeek","","",2],[12,"InvalidDayOfMonth","","",2],[12,"InvalidDayOfYear","","",2],[12,"InvalidZoneOffset","","",2],[12,"InvalidTime","","",2],[12,"MissingFormatConverter","","",2],[12,"InvalidFormatSpecifier","","",2],[12,"UnexpectedCharacter","","",2],[3,"get_time","","Returns the current time as a `timespec` containing the seconds and\nnanoseconds since 1970-01-01T00:00:00Z."],[3,"precise_time_ns","","Returns the current value of a high-resolution performance counter\nin nanoseconds since an unspecified epoch."],[3,"precise_time_s","","Returns the current value of a high-resolution performance counter\nin seconds since an unspecified epoch."],[3,"tzset","",""],[3,"empty_tm","",""],[3,"at_utc","","Returns the specified time in UTC"],[3,"now_utc","","Returns the current time in UTC"],[3,"at","","Returns the specified time in the local timezone"],[3,"now","","Returns the current time in the local timezone"],[3,"strptime","","Parses the time from the string according to the format string."],[3,"strftime","","Formats the time according to the format string."],[10,"fmt","","",0],[10,"decode","","",0],[10,"encode","","",0],[10,"cmp","","",0],[10,"partial_cmp","","",0],[10,"lt","","",0],[10,"le","","",0],[10,"gt","","",0],[10,"ge","","",0],[10,"eq","","",0],[10,"ne","","",0],[10,"clone","","",0],[10,"new","","",0],[10,"add","","",0],[10,"sub","","",0],[10,"fmt","","",1],[10,"eq","","",1],[10,"ne","","",1],[10,"clone","","",1],[10,"to_timespec","","Convert time to the seconds from January 1, 1970",1],[10,"to_local","","Convert time to the local timezone",1],[10,"to_utc","","Convert time to the UTC",1],[10,"ctime","","Returns a TmFmt that outputs according to the `asctime` format in ISO\nC, in the local timezone.",1],[10,"asctime","","Returns a TmFmt that outputs according to the `asctime` format in ISO\nC.",1],[10,"strftime","","Formats the time according to the format string.",1],[10,"rfc822","","Returns a TmFmt that outputs according to RFC 822.",1],[10,"rfc822z","","Returns a TmFmt that outputs according to RFC 822 with Zulu time.",1],[10,"rfc3339","","Returns a TmFmt that outputs according to RFC 3339. RFC 3339 is\ncompatible with ISO 8601.",1],[10,"eq","","",2],[10,"ne","","",2],[10,"fmt","","",2],[10,"fmt","","",3]],"paths":[[1,"Timespec"],[1,"Tm"],[2,"ParseError"],[1,"TmFmt"]]};
searchIndex['gcc'] = {"items":[[0,"","gcc",""],[1,"Config","","Extra configuration to pass to gcc."],[11,"include_directories","","Directories where gcc will look for header files.",0],[11,"definitions","","Additional definitions (`-DKEY` or `-DKEY=VALUE`).",0],[11,"objects","","Additional object files to link into the final archive",0],[3,"compile_library","","Compile a library from the given set of input C files."],[10,"default","","",0]],"paths":[[1,"Config"]]};

initSearch(searchIndex);
