export function EventManager() {
    this.events = new Map();
}

EventManager.prototype.on = function(event, handler) {
    if (!this.events.has(event)) {
        this.events.set(event, new Set());
    }
    this.events.get(event).add(handler);
};

EventManager.prototype.off = function(event, handler) {
    if (this.events.has(event)) {
        this.events.get(event).delete(handler);
        if (this.events.get(event).size === 0) {
            this.events.delete(event);
        }
    }
};

EventManager.prototype.trigger = function(event, data) {
    if (this.events.has(event)) {
        this.events.get(event).forEach(handler => handler(data));
    }
};
