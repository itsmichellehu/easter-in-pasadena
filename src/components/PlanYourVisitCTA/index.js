import "./PlanYourVisitCTA.scss";
import html from './index.html';

function injectPlanYourVisitCTA() {
    document.getElementById("pyv-section").innerHTML = html;
}

export { injectPlanYourVisitCTA };