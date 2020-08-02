import { Service } from 'egg';

export default class Elasticsearch extends Service {
  public async search(wd: string) {
    try {
      const response = await this.app.elasticsearch.search({
        index: 'es_user',
        body: {
          query: {
            match: {
              name: wd,
            },
          },
        }
      })
      console.log('response', response)
      const list = response.hits.hits.map((i: { _source: object[] }) => i._source)
      return {
        count: response.hits.total || 0,
        list,
      }
    } catch (e) {
      console.log('search e', e)
      return ''
    }
  }
}
