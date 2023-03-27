# 区块滚动
```
.parent {
  scroll-snap-type: y mandatory;
}
.child {
  scroll-snap-align: start;
}
```

# 宽高纵横比

```
.box {
  width: 500px;
  height: 500px;
}
.box > img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
```
