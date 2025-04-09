$(document).on('mouseover', '[data-toggle="fup-tooltip"]', function() {
    new FupTooltip($(this));
});

function FupTooltip(element) {
    this.id = this.generateGuid();
    this.element = element;
    this.tooltip = null;

    // Do nothing if exist
    if (this.element.data('tooltip-id')) return;

    this.element.data('tooltip-id', this.id);
    this.init();
}

FupTooltip.prototype.init = function() {
    this.createStyles();
    this.createTooltip();
    this.positionTooltip();
    const bgColor = this.applyCustomColor();
    this.positionTooltip(bgColor);
    this.animateTooltip();
    this.bindEvents();
};

FupTooltip.prototype.generateGuid = function() {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
};

FupTooltip.prototype.createStyles = function() {
    if ($('#fup-tooltip-styles').length) return;

    $('<style id="fup-tooltip-styles">').text(`
        .fup-tooltip {
            background: #333;
            color: #fff;
            font-size: 12px;
            padding: 5px 10px;
            border-radius: 5px;
            z-index: 9999;
            white-space: nowrap;
            pointer-events: none;
            position: absolute;
            box-shadow: 0px 5px 12px 0px #26334d1a;
        }

        .fup-tooltip-arrow {
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid #333;
        }

        .fup-tooltip-animate {
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.1s ease-out, transform 0.1s ease-out;
        }

        .fup-tooltip-animate.show {
            opacity: 1;
            transform: translateY(0);
        }
    `).appendTo('head');
};

FupTooltip.prototype.createTooltip = function () {
    if ($(`#${this.id}`).length) return;

    this.tooltip = $(`
        <div class="fup-tooltip fup-tooltip-animate" id="${this.id}">
            <div class="fup-tooltip-content"></div>
            <div class="fup-tooltip-arrow"></div>
        </div>
    `);

    const tooltipText = this.element.attr('data-title') || 'Tooltip par défaut';
    this.tooltip.find('.fup-tooltip-content').html(tooltipText);
    $('body').append(this.tooltip);
};


FupTooltip.prototype.positionTooltip = function(bgColor = '#333') {
    const placement = this.element.attr('data-placement') || 'top';
    const offset = this.element.offset();
    const elementWidth = this.element.outerWidth();
    const elementHeight = this.element.outerHeight();
    const tooltipWidth = this.tooltip.outerWidth();
    const tooltipHeight = this.tooltip.outerHeight();

    let top, left;

    switch (placement) {
        case 'bottom':
            top = offset.top + elementHeight + 10;
            left = offset.left + (elementWidth / 2) - (tooltipWidth / 2);
            break;
        case 'left':
            top = offset.top + (elementHeight / 2) - (tooltipHeight / 2);
            left = offset.left - tooltipWidth - 10;
            break;
        case 'right':
            top = offset.top + (elementHeight / 2) - (tooltipHeight / 2);
            left = offset.left + elementWidth + 10;
            break;
        case 'top':
        default:
            top = offset.top - tooltipHeight - 10;
            left = offset.left + (elementWidth / 2) - (tooltipWidth / 2);
            break;
    }

    this.tooltip.css({ top, left });
    this.setArrowDirection(placement, bgColor);
};

FupTooltip.prototype.setArrowDirection = function(placement, color = '#333') {
    const arrow = this.tooltip.find('.fup-tooltip-arrow');
    const size = 5;

    const baseStyle = {
        position: 'absolute',
        width: '0',
        height: '0',
        border: 'none'
    };

    switch (placement) {
        case 'bottom':
            arrow.css({
                ...baseStyle,
                top: '-5px',
                left: '50%',
                transform: 'translateX(-50%)',
                borderLeft: `${size}px solid transparent`,
                borderRight: `${size}px solid transparent`,
                borderBottom: `${size}px solid ${color}`
            });
            break;
        case 'left':
            arrow.css({
                ...baseStyle,
                top: '50%',
                right: '-5px',
                transform: 'translateY(-50%)',
                borderTop: `${size}px solid transparent`,
                borderBottom: `${size}px solid transparent`,
                borderLeft: `${size}px solid ${color}`
            });
            break;
        case 'right':
            arrow.css({
                ...baseStyle,
                top: '50%',
                left: '-5px',
                transform: 'translateY(-50%)',
                borderTop: `${size}px solid transparent`,
                borderBottom: `${size}px solid transparent`,
                borderRight: `${size}px solid ${color}`
            });
            break;
        case 'top':
        default:
            arrow.css({
                ...baseStyle,
                bottom: '-5px',
                left: '50%',
                transform: 'translateX(-50%)',
                borderLeft: `${size}px solid transparent`,
                borderRight: `${size}px solid transparent`,
                borderTop: `${size}px solid ${color}`
            });
            break;
    }
};

FupTooltip.prototype.applyCustomColor = function() {
    const color = this.element.attr('data-color');
    
    if (color) {
        this.tooltip.css({
            backgroundColor: color,
            color: '#fff'
        });

        if (color.toLowerCase() == '#ffffff') {
            this.tooltip.css({
                color: '#333'
            });
        }

        return color;
    }
    return '#333';
};

FupTooltip.prototype.animateTooltip = function() {
    if (!this.tooltip.hasClass('show')) {
        requestAnimationFrame(() => {
            this.tooltip.addClass('show');
        });
    }
};

FupTooltip.prototype.bindEvents = function() {
    this.element.on('mouseout', () => {
        this.scheduleTooltipRemoval();
    });

    this.element.on('mouseover', () => {
        if (this.removeTimeout) {
            clearTimeout(this.removeTimeout);
            this.removeTimeout = null;
        }
    });

    this.element.on('mousedown', () => {
        this.removeTooltip();
    });
};

FupTooltip.prototype.scheduleTooltipRemoval = function() {
    this.removeTimeout = setTimeout(() => {
        if (this.tooltip) {
            this.tooltip.remove();
            this.tooltip = null;
            this.element.removeData('tooltip-id');
        }
    }, 100);
};

FupTooltip.prototype.removeTooltip = function () {
    if (this.tooltip) {
        this.tooltip.remove();
        this.tooltip = null;
        this.element.removeData('tooltip-id');
    }
};
