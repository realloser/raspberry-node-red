# Content
This folder contents the configuration files for Node-RED and related flows.

This also includes any code created to support the flows. Those are part of a Flow. Please make sure you load either the flow to see the code or have a look to the `flow.json` file.

## Sample

### Code for the convert Text to JSON flow
This is a snapshot of the code from 19. September 2018.
Make sure you checkout the related Flow to see the latest code.

```js

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
```
