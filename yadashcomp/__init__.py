import os as _os
import dash as _dash
import sys as _sys
from .version import __version__

_current_path = _os.path.dirname(_os.path.abspath(__file__))

_components = _dash.development.component_loader.load_components(
    _os.path.join(_current_path, 'metadata.json'),
    'yadashcomp'
)

_this_module = _sys.modules[__name__]


_js_dist = [
    {
        "relative_package_path": "bundle.js",
        "external_url": (
            "https://unpkg.com/yadashcomp@{}"
            "/yadashcomp/bundle.js"
        ).format(__version__),
        "namespace": "yadashcomp"
    }
]

_css_dist = [
    {
        "relative_package_path": "icons.eot",
        "namespace": "yadashcomp"
    },
    {
        "relative_package_path": "icons.svg",
        "namespace": "yadashcomp"
    },
    {
        "relative_package_path": "icons.ttf",
        "namespace": "yadashcomp"
    },
    {
        "relative_package_path": "icons.woff",
        "namespace": "yadashcomp"
    },
    {
        "relative_package_path": "icons.woff2",
        "namespace": "yadashcomp"
    },
    {
        "relative_package_path": "flags.png",
        "namespace": "yadashcomp"
    }
]


for _component in _components:
    setattr(_this_module, _component.__name__, _component)
    setattr(_component, '_js_dist', _js_dist)
    setattr(_component, '_css_dist', _css_dist)
