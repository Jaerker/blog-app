
class TreeNode {
    constructor(d, l, r) {
        this.data = d !== null && d !== void 0 ? d : null;
        this.left = l !== null && l !== void 0 ? l : null;
        this.right = r !== null && r !== void 0 ? r : null;
    }
    AddNumberToEndPoint(number) {
        if (this.right !== null) {
            this.right = this.right.AddNumberToEndPoint(number);
        }
        else {
            this.right = new TreeNode(number);
        }
        return this;
    }
    AddOperatorToEndPoint(number, operator) {
        if (this.right !== null) {
            this.right = this.right.AddOperatorToEndPoint(number, operator);
        }
        else {
            this.right = new TreeNode(operator, new TreeNode(number));
        }
        return this;
    }
    Calculate() {
        let value = 0;
        if (this.left === null) {
            if (this.data !== null) {
                if (/[²]/.test(this.data)) {
                    value = parseFloat(this.data.substring(1));
                    value *= value;
                }
                if (/[√]/.test(this.data)) {
                    value = parseFloat(this.data.substring(this.data.length - 1));
                    value = Math.sqrt(value);
                }
                if (/[%]/.test(this.data)) {
                    value = parseFloat(this.data.substring(1));
                    value = value / 100;
                }
                else {
                    value = parseFloat(this.data);
                }
            }
            return value.toString();
        }
        else {
            let leftValue = parseFloat(this.left.Calculate());
            let rightValue = parseFloat(this.right !== null ? this.right.Calculate() : "0");
            switch (this.data) {
                case "x":
                    value = leftValue * rightValue;
                    break;
                case "/":
                    value = leftValue / rightValue;
                    break;
                case "+":
                    value = leftValue + rightValue;
                    break;
                case "-":
                    value = leftValue - rightValue;
                    break;
                default:
                    value = leftValue;
                    break;
            }
        }
        return value.toString();
    }
    toString() {
        var _a;
        if (this.left !== null) {
            return `${this.left.toString()} ${this.right !== null ? this.data : ""} ${this.right !== null ? this.right.toString() : ""}`;
        }
        else {
            return (_a = this.data) !== null && _a !== void 0 ? _a : "";
        }
    }
}
export default class Tree {
    constructor(d, l, r) {
        this.root = new TreeNode();
        this.root = new TreeNode(d, l, r);
    }
    printCalculation() {
        return this.root.toString();
    }
    Calculate() {
        return this.root.Calculate();
    }
    AddNode(number, operator) {
        if (this.root.data === null) {
            this.root = new TreeNode(operator, new TreeNode(number));
        }
        else {
            if (this.root.right === null) {
                if (/[x\/]/.test(operator)) {
                    this.root.right = new TreeNode(operator, new TreeNode(number));
                }
                else {
                    this.root.right = new TreeNode(number);
                    this.root = new TreeNode(operator, this.root);
                }
            }
            else {
                if (/[x\/]/.test(operator)) {
                    this.root.right = this.root.right.AddOperatorToEndPoint(number, operator);
                }
                else {
                    this.root.right = this.root.right.AddNumberToEndPoint(number);
                    this.root = new TreeNode(operator, this.root);
                }
            }
        }
    }
}