import {
  animate,
  query,
  style,
  transition,
  trigger,
} from "@angular/animations";

export const fade = // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger("fadeAnimations", [
    transition("* => *", [
      query(
        ":enter",
        [
          style({
            opacity: 0,
            position: "absolute",
            width: "100%",
            height: "100%",
          }),
        ],
        {
          optional: true,
        }
      ),
      query(
        ":leave",
        [
          style({ opacity: 1, width: "100%", height: "100%" }),
          animate(
            "5s",
            style({
              opacity: 0,
              position: "absolute",
              width: "100%",
              height: "100%",
            })
          ),
        ],
        { optional: true }
      ),
      query(
        ":enter",
        [
          style({ opacity: 0, width: "100%", height: "100%" }),
          animate(
            "5s",
            style({
              opacity: 1,
              position: "relative",
              width: "100%",
              height: "100%",
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]);
