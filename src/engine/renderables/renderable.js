import * as glSys from "../core/gl.js";
import * as shaderResources from "../core/shader_resources.js";
import Transform from "../transform.js";

class Renderable {
    constructor() {
        this.mXform = new Transform(); // transform operator for the object
        this.mShader = shaderResources.getConstColorShader();
        this.mColor = [1, 1, 1, 1]; // color of pixel
    }

    draw(camera) {
        let gl = glSys.get();
        this.mShader.activate(this.mColor, this.mXform.getTRSMatrix(),
            camera.getCameraMatrix());
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    setColor(color) { this.mColor = color; }
    getColor() { return this.mColor; }

    getXform() { return this.mXform; }

    // this is private/protected
    _setShader(s) { this.mShader = s; }
}

export default Renderable;