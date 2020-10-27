export default SteppedProgressStep;
/**
 * Represents a step in a stepped progress component.
 */
declare class SteppedProgressStep {
    /**
     * Class constructor.
     *
     * @access public
     * @param {HTMLElement} stepElement - The step element in the DOM
     * @param {SteppedProgress} parent - The parent stepped progress instance
     */
    constructor(stepElement: HTMLElement, parent: any);
    stepElement: HTMLElement;
    parent: any;
    labelElement: HTMLElement;
    statusElement: HTMLElement;
    /**
     * Get whether the step has the "complete" state.
     *
     * @access public
     * @returns {Boolean} Returns whether the step is complete.
     */
    isComplete(): boolean;
    /**
     * Get whether the step has the "current" state.
     *
     * @access public
     * @returns {Boolean} Returns whether the step is current.
     */
    isCurrent(): boolean;
    /**
     * Get whether the step has the "error" state.
     *
     * @access public
     * @returns {Boolean} Returns whether the step has an error.
     */
    isError(): boolean;
    /**
     * Get whether the step has no explicit state (and so is a future step).
     *
     * @access public
     * @returns {Boolean} Returns whether the step has no explicit state.
     */
    isFuture(): boolean;
    /**
     * Set the step's state to "complete".
     *
     * @access public
     * @returns {void}
     */
    markAsComplete(): void;
    /**
     * Set the step's state to "current".
     *
     * @access public
     * @returns {void}
     */
    markAsCurrent(): void;
    /**
     * Set the step's state to "error".
     *
     * @access public
     * @returns {void}
     */
    markAsError(): void;
    /**
     * Remove all states from the step (marking it as a future step).
     *
     * @access public
     * @returns {void}
     */
    markAsFuture(): void;
    /**
     * Get the step label HTML element.
     *
     * @access private
     * @returns {HTMLElement} Returns the step label HTML element.
     */
    _selectLabelElement(): HTMLElement;
    /**
     * Get the step status HTML element, creating it if it does not exist.
     *
     * @access private
     * @returns {HTMLElement} Returns the step status HTML element.
     */
    _selectStatusElement(): HTMLElement;
    /**
     * Set the text of the step status element.
     *
     * @access private
     * @param {String} [statusText=''] - The text to set.
     * @returns {void}
     */
    _setStatusText(statusText?: string): void;
    /**
     * Set the initial status text based on the step state in the DOM.
     *
     * @access private
     * @returns {void}
     */
    _setInitialStatusText(): void;
    /**
     * Clear all state classes from the step element.
     *
     * @access private
     * @returns {void}
     */
    _clearStateClasses(): void;
}
