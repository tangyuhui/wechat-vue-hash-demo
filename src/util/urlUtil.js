
export default {
  // 得到当前项目的访问路径
  getProjectPath () {
    var url = window.self.location.toString()
    return url.substring(0, url.indexOf('/', url.indexOf('://', 0) + 3))
  }
}
