![react-custom-soundcloud](https://matswainson.com/images/github/soundcloud.png)

# React custom soundcloud player

Custom Soundcloud player supporting single tracks & playlists

### Example

![react-custom-soundcloud-2](https://matswainson.com/images/github/soundcloud-player.png)

```js
import SoundCloud from 'react-custom-soundcloud';
import 'react-custom-soundcloud/dist/style.css';

const MyComponent = () => {
  return <SoundCloud
    track="194881641"
    mini={true}
  />;
}
```

#### Options

| Name | Type | Default | Description |
|-----------|-----------|-------------|-------------|
| track | `string` | - | ID of track |
| playlist | `string` | - | ID of playlist |
| mini | `boolean` | `false` | Small player with inline play button |
| theme | `string` | `dark` | Playlist colours - accepts `dark` or `light` |

Track or playlist IDs can be found from Soundcloud embed player URLs

### Browser Support

* Chrome
* Firefox
* Internet Explorer 10 +
* Opera