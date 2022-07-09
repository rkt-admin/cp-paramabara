<Player>
    <video crossorigin="" poster="https://media.vimejs.com/poster.png">
      <source data-src="https://media.vimejs.com/720p.mp4" type="video/mp4" />
      <track
        default
        kind="captions"
        src="https://media.vimejs.com/subs/english.vtt"
        srclang="en"
        label="English"
      />
    </video>
  
    <Ui>
      <!-- Vime components. -->
      <ClickToPlay />
      <Spinner />
      <Poster />
      <!-- Custom component. -->
      <VideoControll />
    </Ui>
  </Player>
  
  <script lang="ts">
    import {
      Player,
      Video,
      Ui,
      ClickToPlay,
      Spinner,
      Poster,
    } from '@vime/svelte';
    import VideoControll from '../components/VideoControll.svelte';
  </script>