const changeTransparency = (mesh, side, boolean) => {
  if (side > 0) {
    mesh.material[side].transparent = boolean;
    mesh.material[side].opacity = boolean ? 0 : 100;
    return;
  }
  mesh.material.transparent = boolean;
  mesh.material.opacity = boolean ? 0 : 100;
};

export { changeTransparency };
