from setuptools import setup

exec (open('yadashcomp/version.py').read())

setup(
    name='yadashcomp',
    version=__version__,
    author='pingf',
    packages=['yadashcomp'],
    include_package_data=True,
    license='MIT',
    description='yet another dash components',
    install_requires=[]
)
