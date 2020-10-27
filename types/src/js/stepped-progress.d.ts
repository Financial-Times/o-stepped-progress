export default SteppedProgress;
/**
 * Represents a stepped progress component.
 */
declare class SteppedProgress {
    /**
     * Get the data attributes from the stepped progress element. If the component is being set up
     * declaratively, this method is used to extract the data attributes from the DOM.
     *
     * @access public
     * @param {HTMLElement} steppedProgressElement - The component element in the DOM
     * @returns {Object} Returns an options object constructed from the DOM.
     */
    static getDataAttributes(steppedProgressElement: HTMLElement): any;
    /**
     * Initialise stepped progress component.
     *
     * @access public
     * @param {(HTMLElement|String)} rootElement - The root element to intialise the component in, or a CSS selector for the root element
     * @param {Object} [options={}] - An options object for configuring the component
     * @returns {(SteppedProgress|Array<SteppedProgress>)} Returns a stepped progress instance, or an array of instances.
     */
    static init(rootEl: any, options?: any): (SteppedProgress | Array<SteppedProgress>);
    /**
     * Class constructor.
     *
     * @access public
     * @param {HTMLElement} steppedProgressElement - The component element in the DOM.
     * @param {Object} [options={}] - An options object for configuring the component.
     */
    constructor(steppedProgressElement: HTMLElement, options?: any);
    steppedProgressElement: HTMLElement;
    options: any;
    /**
     * Get an array of steps.
     *
     * @access public
     * @returns {Array<SteppedProgressStep>} Returns an array of steps.
     */
    getSteps(): Array<SteppedProgressStep>;
    /**
     * Get an array of steps with a "completed" status.
     *
     * @access public
     * @returns {Array<SteppedProgressStep>} Returns an array of steps.
     */
    getCompletedSteps(): Array<SteppedProgressStep>;
    /**
     * Get whether a step exists at a given index (0-based).
     *
     * @access public
     * @param {Number} index - The index to check.
     * @returns {Boolean} Returns whether a step exists at a given index.
     */
    hasStepAtIndex(index: number): boolean;
    /**
     * Get the step at a given index (0-based).
     *
     * @access public
     * @param {Number} index - The index of the step to get.
     * @returns {SteppedProgressStep} Returns the step at the given index.
     * @throws {Error} Will throw an error if there is no step at the given index. Use {@link SteppedProgress#hasStepAtIndex} to check.
     */
    getStepAtIndex(index: number): SteppedProgressStep;
    /**
     * Get the step which has the "current" state. If there are multiple steps with this state then
     * the last one will be returned.
     *
     * @access public
     * @returns {SteppedProgressStep} Returns the current step.
     */
    getCurrentStep(): SteppedProgressStep;
    /**
     * Get the last step in the stepped progress.
     *
     * @access public
     * @returns {SteppedProgressStep} Returns the last step.
     */
    getLastStep(): SteppedProgressStep;
    /**
     * Get whether all steps have the "completed" state.
     *
     * @access public
     * @returns {Boolean} Returns whether all steps are completed.
     */
    isComplete(): boolean;
    /**
     * Get the next future step (a step which does not have the "current", "complete", or "error"
     * states). If no such step exists, the last step will be returned.
     *
     * @access public
     * @returns {SteppedProgressStep} Returns the next step.
     */
    getNextStep(): SteppedProgressStep;
    /**
     * Mark the current step as "complete" and then mark the next step as "current". If all steps
     * have the "complete" state then this method does nothing.
     *
     * @access public
     * @returns {void}
     */
    progress(): void;
    /**
     * Construct step instances and store them on the `_steps` property.
     *
     * @access private
     * @returns {void}
     */
    _constructSteps(): void;
    _steps: SteppedProgressStep[];
}
import SteppedProgressStep from "./stepped-progress-step.js";
