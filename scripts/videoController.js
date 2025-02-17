import videos from "./data/videoModel.js";
import createSvgIcon from './utils/svgIcon.js';

const videoListElement = document.getElementById('content');
let videosRenderHtml = '';

function renderVideoList() {
    videos.forEach((video) => {
        videosRenderHtml +=
            ` <div class="content__box">
                <a href="https://www.youtube.com/watch?v=${video.id}">
                    <div class="content__image">
                        <img src="images/video/${video.image}" alt="">
                            <p class="content__image-text">${video.duration}</p>
                    </div>
                </a>
                <div class="content__meta-info">
                    <div class="content__meta-info-left">
                        <div class="content__channel-picture">
                            <a href="https://www.youtube.com/${video.channelId}"><img src="images/channel/${video.channelImage}" alt=""></a>
                        </div>
                    </div>
                    <div class="content__meta-info-middle">
                        <div class="content__meta-info-title"> 
                            <a href="https://youtu.be/${video.id}">${video.name}</a>
                        </div>
                        <a class="content__meta-info-channel-name" href="https://www.youtube.com/${video.channelName}">${video.channelName}</a>
                        <div class="content__meta-info-views-date">
                            <p class="content__meta-info-views">${video.views} views </p>
                            <p class="content__meta-info-date"> ${video.date}</p>
                        </div>
                    </div>
                    <div class="content__meta-info-right">
                        ${createSvgIcon('M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z')}
                    </div>
                </div>
            </div>
        `
    })

    videoListElement.innerHTML = videosRenderHtml;
}

renderVideoList()