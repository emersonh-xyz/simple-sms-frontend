import {
  faBolt,
  faClock,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
export default function OrderDetails({
  phoneNumber,
  expirationDate,
  service,
  messages,
  orderId,
}) {
  // prettier-ignore
  let updatedNumber = `+${phoneNumber.substring(0, 1)} (${phoneNumber.substring(1,4)}) ${phoneNumber.substring(4,7)}-${phoneNumber.substring(7)}`;

  const [timeRemaining, setTimeRemaining] = useState(
    expirationDate - Date.now()
  );

  useEffect(() => {
    let interval = setInterval(() => {
      setTimeRemaining(expirationDate - Date.now());
    }, 1000);
  });

  return (
    <div>
      <div className="card w-96 bg-base-100 drop-shadow-xl relative">
        <div className="card-body">
          <div className="card-title drop-shadow-xl">
            <p className="text-3xl font-bold ">Order Details</p>
          </div>
          <p className="card-title text-sm">{orderId}</p>

          <div className="divider"></div>
          <div className="mt-0">
            <p>{updatedNumber}</p>
            <p>{service}</p>
            <p>{timeRemaining > 0 ? { timeRemaining } : "Number expired"}</p>
          </div>
          <img
            className="w-20 absolute top-36 right-6 rounded-full shadow-xl"
            src="data:image/webp;base64,UklGRnYNAABXRUJQVlA4WAoAAAAUAAAAMQAAMQAAQUxQSGwAAAABcFtr29K82Lcfrgv9tNDTxXdgjLhng1Tu+vY5JyImAI8SNOa7y4+3/YYveG2PL6Rj55mhLsTKeFAXagXAu5B7kDXbRtILfdbl613+OFc1W10BOVcOAEbBVBoPgDtmGXt4LWlvvv/Vft5LBY9WUDgg/AEAAFANAJ0BKjIAMgA+USCORCOiIZj7jJA4BQS0AGibRrjytzvBnI56Z9oDxAP7tugP0x/0v9d9//TAPQA8rH9lfg9/cH0gM0AOcFvR/VS58ydFjOUXLVCTRT7VG2rjUbv7yZSs9Sm0YhkyzfAP3u0E98/IYCAA/vwsJF9w/M99uS/GfeXZPl7/tfeHdRLtQ387ZIJ/72Jv64Z+dfLiMfTc/+GYaGUx3zJ07CNMRxJRepGkjr9L+Q27exs7PQT5z4t+sx2l36BwL54a6eAHE1GbcPQa4/pke6W6cpqhBliGiwAXPG2vRb9IMQaZ+jg7h9beL7ud/ht/wuGJRy9Q6zWbfnH7f5TaX2BBPMWTZNeLMKAZSaw85SagIqyM6op4OHfkv0Ir3/xa6s1gE1slJhYKRtCAmZOpjokuSJz0lgPVdYiGzICWCRk2j86riPSUFDFHHXfCfWLHZrN31/yvmLw9fquDI7c9P/umI7N213uw9x6/rxltiCeyJCwOWtYgVVtoL++oP4l+Nze1YL7mDxyJwCvmUL2NDMJy6MByPoN84YGRttSlabcqkGINMRmfeHW3TRAT97fiY3Nt2aX0BAbbCgWWa4Wqf+h2wx+aSMQEZaFvrkoXZyOGRiapqVd6qCAHRhJf2ntcw4k9jVuIXsF/Q12sbFkwuY43YAAAAABYTVAg4AoAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LjljY2M0ZGUsIDIwMjIvMDMvMTQtMTE6MjY6MTkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTAtMTRUMTI6NTA6MTMrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMDhUMTY6MDY6NTQrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA3LTA4VDE2OjA2OjU0KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOTk2MGE2NS0zN2RhLTA4NGQtYjA2OS1kZWM4MDU1NDczNDAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5MTc5MTMxYy04NGEwLTFhNDQtYTZjOS1kNDZmZjgzMGNiMTUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYjY2NjVhNC0zYjE4LTUxNDMtYjg5Ni0yYjMyZWRkMDgzMGMiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjcyMDAwMC8xMDAwMCIgdGlmZjpZUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOlJlc29sdXRpb25Vbml0PSIyIiBleGlmOkNvbG9yU3BhY2U9IjY1NTM1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iNTAiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSI1MCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmI2NjY1YTQtM2IxOC01MTQzLWI4OTYtMmIzMmVkZDA4MzBjIiBzdEV2dDp3aGVuPSIyMDIxLTEwLTE0VDEyOjUwOjEzKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuNSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjljNjJmMDc5LWU2ZjAtZDI0YS04YjcxLTA3N2RlNzliNDVhYyIgc3RFdnQ6d2hlbj0iMjAyMS0xMS0wOFQxMTo1MDoyOCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxZWUzZTI4OS1lZDgzLTc4NGMtOGJiYi1lMzE0ZTIyMzVlZDkiIHN0RXZ0OndoZW49IjIwMjItMDctMDhUMTY6MDY6NTQrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy4zIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NjBhNjUtMzdkYS0wODRkLWIwNjktZGVjODA1NTQ3MzQwIiBzdEV2dDp3aGVuPSIyMDIyLTA3LTA4VDE2OjA2OjU0KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuMyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFlZTNlMjg5LWVkODMtNzg0Yy04YmJiLWUzMTRlMjIzNWVkOSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmM3M2FkZGU4LWFhMDQtNTc0Yi04NzRmLTVjNGViZTQzODgwYiIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmZiNjY2NWE0LTNiMTgtNTE0My1iODk2LTJiMzJlZGQwODMwYyIvPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5BNTJDNDFDRkVENjU1REIyREQ4MTNFOEU1QTdCMzhFQTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg=="
          ></img>
          <div className="btn btn-error btn-sm w-fit">Cancel Order</div>
        </div>
      </div>
    </div>
  );
}
