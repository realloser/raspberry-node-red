// This is a snapshot of the script located in flows.json. Please have a look to the flows.json file to see the latest verison

const environmentStringToObject = (message) => {
   const seperated = message.split('|')
      .filter(v => Boolean(v)); // filter out dummy values

   const toValue = (value) => {
      const intValue = parseInt(value);
      if (isNaN(intValue) || value === '-1') {
         return -1;
      }
      return intValue / 100;
   };

   const returnValue = {
      msgid: msg._msgid,
      timeStamp: new Date().getTime(),
      node: seperated[0],
      messageIndex: parseInt(seperated[1]),
      primary_temperature: toValue(seperated[2]),
      humidity: toValue(seperated[3]),
      light_intensity: parseInt(seperated[4]),
      batt: toValue(seperated[5]),
      secondary_temperature: toValue(seperated[6]),
      pressure: toValue(seperated[7]),
   };
   return returnValue
}

const payload = environmentStringToObject(msg.payload);

return {
   topic: `M18/Environment/${payload.node}`,
   qos: 0,
   retain: false,
   payload: payload
};
