"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const react_1 = __importDefault(require("react"));
const smooth_scroll_into_view_if_needed_1 = __importDefault(require("smooth-scroll-into-view-if-needed"));
const window_or_global_1 = __importDefault(require("window-or-global"));
const Slides_1 = __importDefault(require("./Slides"));
const PresenterContainer = styled_1.default.div ``;
class Presentation extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.scrollTimeout = null;
        this.slide = getSlide();
        this.onKeydown = (event) => {
            const { key } = event;
            if (key === "ArrowUp" || key === "ArrowLeft") {
                event.preventDefault();
                this.moveToPreviousSlide();
            }
            if (key === "ArrowDown" || key === "ArrowRight") {
                event.preventDefault();
                this.moveToNextSlide();
            }
        };
        this.onScroll = () => {
            const scrollY = window_or_global_1.default.scrollY;
            const slideHeight = getSlideHeight();
            const nearestSlide = Math.round(scrollY / slideHeight);
            window_or_global_1.default.location.hash = nearestSlide;
            window_or_global_1.default.clearTimeout(this.scrollTimeout);
            this.scrollTimeout = window_or_global_1.default.setTimeout(() => {
                if (scrollY === window_or_global_1.default.scrollY) {
                    this.scrollToSlide(nearestSlide);
                }
            }, 100);
        };
        this.moveToPreviousSlide = () => {
            this.goToSlide(Math.max(Number(window_or_global_1.default.location.hash.slice(1)) - 1, 0));
        };
        this.moveToNextSlide = () => {
            this.goToSlide(Math.min(Number(window_or_global_1.default.location.hash.slice(1)) + 1, this.props.slides.length - 1));
        };
        this.goToSlide = (slide) => {
            this.slide = slide;
            this.scrollToSlide(slide);
        };
    }
    componentDidCatch(err) {
        // TODO: Use a nice error overlay here
        console.error(err);
    }
    componentDidMount() {
        if (window_or_global_1.default.document) {
            window_or_global_1.default.document.addEventListener("keydown", this.onKeydown, false);
            window_or_global_1.default.addEventListener("wheel", this.onScroll);
            if (!window_or_global_1.default.location.hash) {
                window_or_global_1.default.location.hash = 0;
            }
        }
    }
    componentWillUnmount() {
        if (window_or_global_1.default.document) {
            window_or_global_1.default.document.removeEventListener("keydown", this.onKeydown, false);
            window_or_global_1.default.removeEventListener("wheel", this.onScroll);
            window_or_global_1.default.clearTimeout(this.scrollTimeout);
        }
    }
    componentDidUpdate(nextProps) {
        if (!isEqual_1.default(this.props.slides, nextProps.slides)) {
            this.scrollToSlide(this.slide);
        }
    }
    scrollToSlide(slide) {
        const element = window_or_global_1.default.document.getElementsByClassName(`slide-${slide}`)[0];
        smooth_scroll_into_view_if_needed_1.default(element).then(() => {
            window_or_global_1.default.location.hash = slide;
        });
    }
    render() {
        const { features, conferenceId, presentationID, slides, theme } = this.props;
        return (react_1.default.createElement(PresenterContainer, null,
            react_1.default.createElement(Slides_1.default, { conferenceId: conferenceId, selectedSlide: this.slide, slides: slides, theme: theme, presentationID: presentationID, features: features })));
    }
}
function getSlide() {
    if (!window_or_global_1.default.location) {
        return 0;
    }
    return window_or_global_1.default.location.hash ? Number(window_or_global_1.default.location.hash.slice(1)) : 0;
}
// Assumes there's at least one slide
function getSlideHeight() {
    const element = window_or_global_1.default.document.getElementsByClassName(`slide-0`)[0];
    if (element) {
        return element.offsetHeight;
    }
    return 0;
}
exports.default = Presentation;
//# sourceMappingURL=Presentation.js.map