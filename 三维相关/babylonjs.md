# 辉光被添加到所有网格上的问题
`可添加一个默认网格到辉光中`  
```
const onlyMesh = new BABYLON.Mesh('onlyMesh');
// .....
gl.addIncludedOnlyMesh(onlyMesh)
```

# 性能优化
[链接](https://doc.babylonjs.com/divingDeeper/scene/optimize_your_scene)

# 常见场景优化
```
this.scene.meshes.forEach(m => {
  if (m.material) m.material.freeze(); // 冻结材质
  m.isPickable = false;
  m.freezeWorldMatrix(); // 阻止世界坐标计算
  m.doNotSyncBoundingInfo = true; // 不再边界计算
  m.cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY; // 消除策略
})
this.scene.autoClear = false; // 每帧不清除缓冲区
this.scene.autoClearDepthAndStencil = false; // 每帧不清除深层及模板缓冲区
```

# 内网自定配置解压器目录
```
BABYLON.MeshoptCompression.Configuration = {
  decoder: {
    url: `${window.location.origin}${commonUrl}babylonFile/meshopt_decoder.js`
  }
}
// https://forum.babylonjs.com/t/ktx2-transcoder-support-progress/13960/14?u=compiledsuccessfull
BABYLON.KhronosTextureContainer2.URLConfig.jsDecoderModule = `${window.location.origin}${commonUrl}babylonFile/babylon.ktx2Decoder.js`
BABYLON.KhronosTextureContainer2.URLConfig.wasmUASTCToASTC = `${window.location.origin}${commonUrl}babylonFile/uastc_astc.wasm`
BABYLON.KhronosTextureContainer2.URLConfig.wasmUASTCToBC7 = `${window.location.origin}${commonUrl}babylonFile/uastc_bc7.wasm`
BABYLON.KhronosTextureContainer2.URLConfig.jsMSCTranscoder = `${window.location.origin}${commonUrl}babylonFile/msc_basis_transcoder.js`
BABYLON.KhronosTextureContainer2.URLConfig.wasmMSCTranscoder = `${window.location.origin}${commonUrl}babylonFile/msc_basis_transcoder.wasm`
```
