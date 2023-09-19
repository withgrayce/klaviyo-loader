import { Klaviyo } from './types';

export class Loader
{
  private api: Klaviyo | undefined;
  private loader: Promise<Klaviyo> | undefined;
  private resolve: (api: Klaviyo) => void;
	private reject: (err: Error) => void;

	constructor(private companyId: string = null) {
		if (typeof window === 'undefined') {
			throw new Error('klaviyo is supported only in browser environments');
		}
	}

  public load(): Promise<Klaviyo> {
    if (typeof this.api !== 'undefined') {
			return Promise.resolve(this.api);
		}

		if (typeof this.loader !== 'undefined') {
			return this.loader;
		}

    return this.loader = new Promise((resolve, reject) => {
			this.resolve = resolve;
			this.reject = reject;

      if (window['_learnq']) {
        resolve(window['_learnq']);
        return;
      }

      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = !0;
      script.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${this.companyId}`
      script.onload = () => {
        resolve(window['_learnq'] as unknown as Klaviyo);
      };
      script.onerror = (error) => {
        reject(error)
      }
      document.head.appendChild(script);
		});
  }
}
